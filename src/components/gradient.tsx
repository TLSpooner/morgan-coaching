import { clsx } from 'clsx'

export function Gradient({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-linear-115 from-white from-28% via-white via-70% to-white sm:bg-linear-145',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl overflow-hidden">
      <div
        className={clsx(
          'absolute -top-44 -right-60 h-60 w-xl transform-gpu md:right-0',
          'from-mogranYellow-200 via-mogranOrange-200 bg-linear-115 from-28% via-70% to-morganGreen-500',
          'rotate-[-10deg] rounded-full blur-3xl',
        )}
      />
    </div>
  )
}
