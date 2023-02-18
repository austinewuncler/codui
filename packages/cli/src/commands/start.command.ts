import { Command } from '@commander-js/extra-typings';
import colors from 'colors/safe';
import { join } from 'path';

const isProduction = process.env['NODE_VERSION'] === 'production';

const startCommand = new Command('start')
  .description('Start a new or load an existing workbook')
  .argument('[workbook]', 'name of workbook to load', 'workbook')
  .option(
    '-p, --port <number>',
    'http port to run server on',
    isProduction ? '4000' : '3000'
  )
  .action((workbook, { port }) => {
    const filepath = join(
      process.cwd(),
      isProduction ? '' : 'workbooks',
      `${workbook}.codui`
    );
    console.info(
      `Running ${colors.dim(filepath)} at ${colors.cyan(
        `http://localhost:${port}/${workbook}`
      )}`
    );
  });

export default startCommand;
