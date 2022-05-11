import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validRoutes } from "../../constants/valid-routes";
import { Switcher } from "../Switcher";

export function FeedFilter() {
  const history = useHistory();

  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    checkWhichOptionIsSelected();
  }, []);

  const filterOptions = [
    { label: "all", value: "all" },
    { label: "following", value: "following" },
  ];

  function checkWhichOptionIsSelected() {
    if (history.location.pathname.indexOf(validRoutes.FILTER_ALL) > -1) {
      setSelectedOption(0);

      return;
    }

    setSelectedOption(1);
  }

  function handleOnChangeSwitcher(selectedSwitcherOption) {
    history.push(selectedSwitcherOption);
    checkWhichOptionIsSelected();
  }

  return (
    <Switcher
      options={filterOptions}
      optionChecked={selectedOption}
      onChange={handleOnChangeSwitcher}
    />
  );
}
