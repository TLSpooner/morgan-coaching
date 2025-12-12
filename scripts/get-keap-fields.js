/**
 * Keap Custom Fields Lookup Script
 *
 * This script retrieves all available custom fields from your Keap account.
 * Run this to find the IDs for your "Interest" and "Persona" custom fields.
 *
 * Usage:
 *   node scripts/get-keap-fields.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Read .env.local file manually
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('❌ Error: .env.local file not found');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').replace(/^["']|["']$/g, '');
        process.env[key.trim()] = value;
      }
    }
  }
}

loadEnv();
const accessToken = process.env.KEAP_ACCESS_TOKEN;

if (!accessToken) {
  console.error('❌ Error: KEAP_ACCESS_TOKEN not found in .env.local');
  process.exit(1);
}

function getContactModel() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.infusionsoft.com',
      port: 443,
      path: '/crm/rest/v1/contacts/model',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.end();
  });
}

async function main() {
  console.log('\n=== Keap Custom Fields Lookup ===\n');
  console.log('🔍 Fetching contact model from Keap...\n');

  try {
    const model = await getContactModel();

    if (!model.custom_fields || model.custom_fields.length === 0) {
      console.log('ℹ️  No custom fields found in your Keap account.');
      console.log('   Create custom fields in Keap Settings → Custom Fields\n');
      return;
    }

    console.log('✅ Found custom fields:\n');
    console.log('─'.repeat(80));

    model.custom_fields.forEach((field) => {
      console.log(`\n📋 Field: ${field.label || 'Unnamed Field'}`);
      console.log(`   ID: ${field.id}`);
      console.log(`   Type: ${field.field_type || 'N/A'}`);

      if (field.options && field.options.length > 0) {
        console.log(`   Options: ${field.options.map(opt => opt.label).join(', ')}`);
      }
    });

    console.log('\n' + '─'.repeat(80));
    console.log('\n💡 To use these fields, update your .env.local file:\n');

    const interestField = model.custom_fields.find(f =>
      f.label && f.label.toLowerCase().includes('interest')
    );
    const personaField = model.custom_fields.find(f =>
      f.label && f.label.toLowerCase().includes('persona')
    );

    if (interestField) {
      console.log(`KEAP_CUSTOM_FIELD_INTEREST="${interestField.id}"`);
    } else {
      console.log('KEAP_CUSTOM_FIELD_INTEREST="YOUR_INTEREST_FIELD_ID"');
    }

    if (personaField) {
      console.log(`KEAP_CUSTOM_FIELD_PERSONA="${personaField.id}"`);
    } else {
      console.log('KEAP_CUSTOM_FIELD_PERSONA="YOUR_PERSONA_FIELD_ID"');
    }

    console.log('\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\nTroubleshooting:');
    console.error('  1. Check that your KEAP_ACCESS_TOKEN is valid');
    console.error('  2. Make sure you have access to the Keap API');
    console.error('  3. Verify you\'re using the correct token for your sandbox/production environment\n');
  }
}

main();
