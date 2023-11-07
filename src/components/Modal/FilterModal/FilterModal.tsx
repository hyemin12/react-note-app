import { FaTimes } from "react-icons/fa";
import { DeleteBox, FixedContainer } from "../Modal.styes";
import { Box, Container, TopBox } from "./FilterModal.styles";
import { useAppDispatch } from "@hooks/redux";
import { toggleFilterModal } from "@store/modal/modal.slice";

interface FilterModalProps {
  filter: string;
  filterHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterClearHandler: () => void;
}

const FilterModal = ({
  filter,
  filterHandler,
  filterClearHandler,
}: FilterModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <FixedContainer>
      <Container>
        <DeleteBox
          onClick={() => dispatch(toggleFilterModal(false))}
          className="filters__close"
        >
          <FaTimes />
        </DeleteBox>
        <TopBox>
          <div className="filters__title">정렬</div>
          <small onClick={filterClearHandler} className="filters__delete">
            초기화
          </small>
        </TopBox>

        <Box>
          <div className="filters__subtitle">PRIORITY</div>
          <div className="filters__check">
            <input
              type="radio"
              name="filter"
              value="low"
              id="low"
              checked={filter === "low"}
              onChange={(e) => filterHandler(e)}
            />
            <label htmlFor="low">Low to High</label>
          </div>
          <div className="filters__check">
            <input
              type="radio"
              name="filter"
              value="high"
              id="high"
              checked={filter === "high"}
              onChange={(e) => filterHandler(e)}
            />
            <label htmlFor="low">High to Low</label>
          </div>
        </Box>

        <Box>
          <div className="filters__subtitle">DATE</div>
          <div className="filters__check">
            <input
              type="radio"
              name="filter"
              value="latest"
              id="new"
              checked={filter === "latest"}
              onChange={(e) => filterHandler(e)}
            />
            <label htmlFor="new">Sort by Latest</label>
          </div>
          <div className="filters__check">
            <input
              type="radio"
              name="filter"
              value="created"
              id="create"
              checked={filter === "created"}
              onChange={(e) => filterHandler(e)}
            />
            <label htmlFor="create">Sort by Created</label>
          </div>
          <div className="filters__check">
            <input
              type="radio"
              name="filter"
              value="edited"
              id="edit"
              checked={filter === "edited"}
              onChange={(e) => filterHandler(e)}
            />
            <label htmlFor="edit">Sort by Edited</label>
          </div>
        </Box>
      </Container>
    </FixedContainer>
  );
};

export default FilterModal;
