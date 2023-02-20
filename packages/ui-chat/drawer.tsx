export const DrawerTrigger: React.FC<React.PropsWithChildren<{}>> = props => {
  return (
    <label htmlFor="my-drawer-2" className="btn btn-square">
      {props.children}
    </label>
  );
};

export type DrawerProps = {
  content?: React.ReactNode;
  side?: React.ReactNode;
};

export const Drawer: React.FC<DrawerProps> = props => {
  return (
    <div className="drawer">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{props.content}</div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        {props.side}
      </div>
    </div>
  );
};
