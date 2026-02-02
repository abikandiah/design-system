import { CodeDisplay } from "@/components/CodeDisplay";
import type { Meta, StoryObj } from "@storybook/react";

const sampleCode = `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`;

const meta: Meta<typeof CodeDisplay> = {
	title: "Components/CodeDisplay",
	component: CodeDisplay,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		language: { control: "text" },
		title: { control: "text" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		code: sampleCode,
		language: "javascript",
		title: "example.js",
	},
};

export const NoHeader: Story = {
	args: {
		code: sampleCode,
	},
};

export const WithChildren: Story = {
	render: () => (
		<CodeDisplay language="bash" title="Terminal">
			{`npm install
npm run dev`}
		</CodeDisplay>
	),
};

export const LongCode: Story = {
	args: {
		code: `import * as React from "react";

function Component() {
  const [state, setState] = React.useState(0);
  return (
    <div>
      <button onClick={() => setState(s => s + 1)}>
        Count: {state}
      </button>
    </div>
  );
}

export { Component };`,
		language: "tsx",
		title: "Component.tsx",
	},
};
