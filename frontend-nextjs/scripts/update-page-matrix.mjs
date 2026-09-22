import fs from 'fs';

let code = fs.readFileSync('app/page.js', 'utf8');
const oldImport = "import MetricsBanner from './components/MetricsBanner';";
const newImport = "import MetricsBanner from './components/MetricsBanner';\nimport ArchitectureMatrix from './components/ArchitectureMatrix';";

if (!code.includes('import ArchitectureMatrix')) {
  code = code.replace(oldImport, newImport);
}

const startMarker = '{/* Service Capabilities Architecture - Split editorial panels */}';
const endMarker = '{/* Trust & Authority Signals Banner with Modern Sanity Styling */}';

const startIndex = code.indexOf(startMarker);
const endIndex = code.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
  const newSection = startMarker + '\n      <ArchitectureMatrix />\n\n      ';
  code = code.substring(0, startIndex) + newSection + code.substring(endIndex);
  fs.writeFileSync('app/page.js', code, 'utf8');
  console.log('REPLACED_SUCCESSFULLY');
} else {
  console.log('FAILED_TO_FIND_SECTION', startIndex, endIndex);
}
