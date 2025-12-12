/**
 * Keap OAuth Token Generator
 *
 * This script helps you generate an access token for Keap API.
 *
 * Steps:
 * 1. Go to https://keys.developer.keap.com/
 * 2. Create or select your application
 * 3. Copy your Client ID and Client Secret
 * 4. Run this script: node scripts/get-keap-token.js
 * 5. Follow the authorization URL in your browser
 * 6. Copy the code from the redirect URL
 * 7. Paste it back into this script
 */

const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getToken() {
  console.log('\n=== Keap OAuth Token Generator ===\n');

  const clientId = await question('Enter your Keap Client ID: ');
  const clientSecret = await question('Enter your Keap Client Secret: ');
  const redirectUri = await question('Enter your Redirect URI (from Keap app settings): ');

  const authUrl = `https://accounts.infusionsoft.com/app/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=full`;

  console.log('\n📋 Step 1: Visit this URL in your browser:\n');
  console.log(authUrl);
  console.log('\n📋 Step 2: Authorize the application');
  console.log('📋 Step 3: You\'ll be redirected to your redirect URI with a "code" parameter\n');

  const code = await question('Enter the authorization code from the URL: ');

  console.log('\n⏳ Exchanging code for access token...\n');

  const tokenData = await exchangeCodeForToken(clientId, clientSecret, redirectUri, code);

  if (tokenData.access_token) {
    console.log('✅ Success! Your access token:\n');
    console.log(tokenData.access_token);
    console.log('\n📝 Add this to your .env.local file:');
    console.log(`KEAP_ACCESS_TOKEN="${tokenData.access_token}"`);

    if (tokenData.refresh_token) {
      console.log('\n💡 You also received a refresh token (save this for later):');
      console.log(`KEAP_REFRESH_TOKEN="${tokenData.refresh_token}"`);
    }

    console.log('\n⏰ This token will expire in:', tokenData.expires_in, 'seconds');
  } else {
    console.error('❌ Error getting token:', tokenData);
  }

  rl.close();
}

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

function exchangeCodeForToken(clientId, clientSecret, redirectUri, code) {
  return new Promise((resolve, reject) => {
    const postData = new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri
    }).toString();

    const options = {
      hostname: 'api.infusionsoft.com',
      port: 443,
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
}

getToken();
