import { startServer } from '@codui/server';
import { Command } from '@commander-js/extra-typings';
import colors from 'colors/safe';
import { dirname, join } from 'path';

const isProduction = process.env['NODE_ENV'] === 'production';
const startCommand = new Command('start')
  .description('Start a new or load an existing workbook')
  .argument('[workbook]', 'name of workbook to load', 'workbook')
  .option(
    '-p, --port <number>',
    'http port to run server on',
    isProduction ? '4000' : '3000'
  )
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .action(async (workbook, { port }) => {
    const filepath = join(
      process.cwd(),
      isProduction ? '' : 'workbooks',
      `${workbook}.codui`
    );
    const appDir = isProduction
      ? dirname(require.resolve('@codui/app/dist/index.html'))
      : null;

    try {
      await startServer({ port: parseInt(port), filepath, appDir });
      console.info(
        `${colors.bgBlue(colors.black(' INFO '))} Running ${colors.dim(
          filepath
        )} at ${colors.cyan(`http://localhost:${colors.bold(port)}`)}`
      );
    } catch (error: any) {
      console.error(
        `${colors.bgRed(colors.black(' ERROR '))} ${colors.red(
          error.code === 'EADDRINUSE'
            ? `Port ${colors.bold(
                port
              )} is already in use, please specify a different port.`
            : error.message
        )}`
      );
    }
  });

export default startCommand;
