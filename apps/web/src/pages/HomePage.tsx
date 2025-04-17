import { Button } from "@repo/ui/button";

export default function HomePage() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Fab Design Tokens</h1>
      <p className="text-xl mb-8">
        A practical case study and implementation of a simple multi-platform design token system
      </p>
      <div className="space-y-4">
        <p className="mb-4">
          This project demonstrates how to create and manage design tokens across multiple platforms:
        </p>
        <ul className="list-disc text-left max-w-md mx-auto mb-8 space-y-2">
          <li>Web app built with Vite and React</li>
          <li>Mobile apps for iOS and Android built with React Native</li>
          <li>Tokens transformation with Style Dictionary</li>
          <li>UI components with shadcn/ui and Storybook</li>
          <li>Documentation with Fumadocs</li>
        </ul>
        <div className="flex gap-4 justify-center">
          <Button>Explore Components</Button>
          <Button variant="outline">View Tokens</Button>
        </div>
      </div>
    </div>
  );
} 