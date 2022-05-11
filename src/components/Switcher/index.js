import { SwitchContainer } from "./styles";

export function Switcher({ options, optionChecked }) {
  return (
    <SwitchContainer>
      {options.map((currentOption, index) => {
        return (
          <>
            <input
              type="radio"
              id={currentOption.value}
              value={currentOption.value}
              checked={optionChecked === index}
            />
            <label for={currentOption.value}>{currentOption.label}</label>
          </>
        );
      })}
    </SwitchContainer>
  );
}
