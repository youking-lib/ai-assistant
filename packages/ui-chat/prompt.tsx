import { promptConstants } from '@assistant/constants';

export const PromptMenu = () => {
  return (
    <ul className="menu bg-base-100 w-56">
      {promptConstants.prompts.map(item => {
        return (
          <li key={item.prompt}>
            <a>{item.act_zh}</a>
          </li>
        );
      })}
    </ul>
  );
};
