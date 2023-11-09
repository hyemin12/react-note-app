import { Box, Container } from "./FilterModal.styles";

import FilterCheckbox from "./FilterCheckbox";

interface FilterModalProps {
  filter: string;
  filterHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterClearHandler: () => void;
}

export interface FilterProps {
  id: string;
  value: string;
  name: string;
}

const priorityFilters: FilterProps[] = [
  { id: "low", value: "low", name: "낮은순" },
  { id: "high", value: "high", name: "높은순" },
];
const dateFilters: FilterProps[] = [
  { id: "new", value: "latest", name: "최신순" },
  { id: "create", value: "created", name: "생성순" },
  { id: "edit", value: "edited", name: "수정순" },
];

const FilterModal = ({ filter, filterHandler }: FilterModalProps) => {
  return (
    <Container>
      <Box>
        <h4 className="filters__subtitle">우선 순위</h4>
        {priorityFilters.map((item) => (
          <FilterCheckbox
            filter={filter}
            checkboxItem={item}
            filterHandler={filterHandler}
            key={item.id}
          />
        ))}
      </Box>

      <Box>
        <h4 className="filters__subtitle">날짜</h4>
        {dateFilters.map((item) => (
          <FilterCheckbox
            filter={filter}
            checkboxItem={item}
            filterHandler={filterHandler}
            key={item.id}
          />
        ))}
      </Box>
    </Container>
  );
};

export default FilterModal;
