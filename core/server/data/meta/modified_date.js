var _ = require('lodash');

function getModifiedDate(data) {
    console.log('getModifiedDate(data): ', data);
    
    var context = data.context ? data.context : null,
        modDate;

    context = _.includes(context, 'amp') ? 'post' : context;

    if (data[context]) {
        modDate = data[context].updated_at || null;
        if (modDate) {
            return new Date(modDate).toISOString();
        }
    }
    
    if (context[0] === 'page' && data.post && data.post[context] && data.post.updated_at) {
        console.log('data.post: ', data.post);
        return new Date(data.post.updated_at).toISOString();
    }
    return null;
}

module.exports = getModifiedDate;
