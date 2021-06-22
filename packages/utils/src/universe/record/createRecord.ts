import RecordSource from './classes/Record';

export const createRecord = (descriptors, source) => {
    return new RecordSource(descriptors, source);
}

export default createRecord;
