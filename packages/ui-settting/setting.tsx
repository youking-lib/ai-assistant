export const SettingModalTrigger: React.FC<{}> = () => {
  return (
    <label htmlFor="my-modal" className="btn">
      open modal
    </label>
  );
};

export const SettingModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to use Wikipedia for
            free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
