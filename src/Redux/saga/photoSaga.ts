import {put, takeEvery, call} from 'redux-saga/effects';
import {getPhotos} from '../photoReducer';
import {FETCH_PHOTOS} from '../helpers';

const fetchPhotos = () =>
  fetch(
    'https://api.unsplash.com/photos/random?client_id=Lbzwiu_qP6IpJks1Lpfoxi1wN5KHvvgRb62WQu9yFjw&count=30',
  );

function* photoWorker() {
  const data = yield call(fetchPhotos);
  const json = yield call(() => new Promise(res => res(data.json())));
  yield put(getPhotos(json));
}

export function* photoWatcher() {
  yield takeEvery(FETCH_PHOTOS, photoWorker);
}
