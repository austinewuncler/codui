import { nanoid } from '@reduxjs/toolkit';

import type { Cell } from '../types';

export const defaultCells: Cell[] = [
  {
    id: nanoid(),
    type: 'markdown',
    content:
      '# codui\n\nThis is an interactive coding environment.\nYou can write JavaScript, see it executed, and write comprehensive documentation using markdown.\n\n- Click on any markdown cell (including this one) to edit it.\n- The code in each cell is an accumulation of all the cells above it.\n  If you define a variable in cell #1, you can refer to it in any following cell.\n- Render any string, number, object, JSX element or React component by calling the `render` function.\n  This is a function built into this environment.\n  Call `render` at most once in each code cell.\n- Format cell content, move cell up or down and delete cell using the buttons on the cell header.\n- Add new cells using the buttons between the cells.\n\nAll of your changes get saved to the file that you ran `codui start` with.\nFor example, if you run\n\n```bash\nnpx -p @codui/cli codui start my-workbook\n\n# or\n\nyarn dlx -p @codui/cli codui start my-workbook\n```\n\nall of the markdown and code you write will be saved to a file called `my-workbook.codui` in the current working directory.',
  },
  {
    id: nanoid(),
    type: 'code',
    content:
      'import \'tailwindcss@2.2.19/dist/tailwind.min.css\';\nimport { useState } from \'react\';\n\nconst App = () => {\n  const [counter, setCounter] = useState(0);\n\n  return (\n    <div className="p-4 flex justify-center gap-4 items-center">\n      <button\n        className="bg-red-500 text-sm font-medium text-white px-2 py-1 rounded"\n        onClick={() => setCounter((p) => p - 1)}\n      >\n        Decrease\n      </button>\n      <span className="font-bold">{counter}</span>\n      <button\n        className="bg-green-500 text-sm font-medium text-white px-2 py-1 rounded"\n        onClick={() => setCounter((p) => p + 1)}\n      >\n        Increase\n      </button>\n    </div>\n  );\n};\n\nrender(<App />);',
  },
];
