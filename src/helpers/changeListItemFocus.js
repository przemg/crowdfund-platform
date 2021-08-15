const changeListItemFocus = (itemsList) => {
  const [focusedItem] = itemsList.filter((i) => i === document.activeElement);
  const indexOfFocuesdItem = itemsList.indexOf(focusedItem);

  return {
    next() {
      if (indexOfFocuesdItem < 0) {
        itemsList[0].focus();
        return;
      }

      if (indexOfFocuesdItem + 1 < itemsList.length) {
        itemsList[indexOfFocuesdItem + 1].focus();
      }
    },
    prev() {
      if (indexOfFocuesdItem > 0) itemsList[indexOfFocuesdItem - 1].focus();
    },
  };
};

export default changeListItemFocus;
