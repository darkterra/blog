function getPublishedDate(data) {
    console.log('getPublishedDate(data): ', data);
    
    var context = data.context ? data.context[0] : null;

    context = context === 'amp' ? 'post' : context;

    if (data[context] && data[context].published_at) {
        return new Date(data[context].published_at).toISOString();
    }
    
    if (context === 'page' && data[context] && data.post && data.post.published_at ) {
        return new Date(data.post.published_at).toISOString();
    }
    return null;
}

module.exports = getPublishedDate;
