// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import Available from "@site/src/components/Available";
import Deprecated from "@site/src/components/Deprecated";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "Available" tag to our <Available /> component!
  // `Available` will receive all props that were passed to `Available` in MDX
  Available,
  Deprecated,
};
