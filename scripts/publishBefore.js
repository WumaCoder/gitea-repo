const fs = require('fs');

const { Command } = require('commander');
const program = new Command();

program
  .option('--version <string>', 'version')
  .action((str, options) => {

    const content = fs.readFileSync('../index')

    fs.writeFileSync('../index', content.replace('{{VERSION}}', options.version))
  });

program.parse();