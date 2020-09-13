import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeDurationFrom,
  changeDurationTo,
  createActionAddTag,
  createActionRemoveTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),

});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  //changeDuration: value => dispatch(changeDuration(value)),
  changeDurationFrom: (type, value) => dispatch(changeDurationFrom(type, value)),
  changeDurationTo: (type, value) => dispatch(changeDurationTo(type, value)),
  createActionAddTag: (tag, checked) => dispatch(createActionAddTag(tag, checked)),
  createActionRemoveTag: (tag, checked) => dispatch(createActionRemoveTag(tag, checked)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
