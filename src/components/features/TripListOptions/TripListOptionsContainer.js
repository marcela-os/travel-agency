import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {
  getAllFilters,
  changeSearchPhrase,
  changeDuration,
  createActionAddTag,
  createActionRemoveTag} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),

});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeDuration: (type, value) => dispatch(changeDuration({type, value})),
  createActionAddTag: (tag) => dispatch(createActionAddTag(tag)),
  createActionRemoveTag: (tag) => dispatch(createActionRemoveTag(tag)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
