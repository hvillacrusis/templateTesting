import tv4 from 'tv4'
import stateSechema from 'middlewares/stateSchema';
const stateValidator =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    next(action);

    if(tv4.validate(getState(), stateSechema)){
      console.warn('Invalid state schema detected')
    }
  };

export default stateValidator;
