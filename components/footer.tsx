export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-2 py-6">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Website Pro. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}
