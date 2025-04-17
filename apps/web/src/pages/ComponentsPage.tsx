import { Button } from "@repo/ui/button";

export default function ComponentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Components</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-medium mb-4">Sizes</h3>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button>Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-primary"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Card Title</h3>
              <p className="text-gray-600 mb-4">This is a simple card component using the design tokens.</p>
              <Button variant="outline" size="sm">Learn More</Button>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-secondary"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Another Card</h3>
              <p className="text-gray-600 mb-4">Cards can be used in various layouts and configurations.</p>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-gray-800"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Third Example</h3>
              <p className="text-gray-600 mb-4">Design tokens ensure consistent styling across components.</p>
              <Button variant="outline" size="sm">Explore</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 