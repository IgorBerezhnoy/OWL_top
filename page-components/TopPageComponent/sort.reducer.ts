import {SortEnum} from '@/components/Sort/Sort.props';
import {ProductModel} from '@/interfaces/product.interface';


export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating: {
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
      };
    }
    case SortEnum.Price: {
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) => a.initialRating > b.initialRating ? 1 : -1)
      };
    }
    case SortEnum.Reset: {
      return {
        sort: SortEnum.Price,
        products: action.initialState
      };
    }
    default: {
      throw new Error('Неверный тип сортировки');
    }
  }
};


export type SortActions = {
  type: SortEnum.Price;
} | {
  type: SortEnum.Reset;
  initialState: ProductModel[]
} | { type: | SortEnum.Rating };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}