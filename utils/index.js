const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    let i = 0;
    _.forEach(store, (value) => {
        let index = value.students.length + 1;
        if(value.subject == 'math'){
            store[i].students.splice(index, 0, {name: name, score: scores.math});
        }
        else if(value.subject == 'science'){
            store[i].students.splice(index, 0, {name: name, score: scores.science});
        }
        i++;
    })

    return store;
};


/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    // code here
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    // code here
};
