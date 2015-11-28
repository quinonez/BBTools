{
    'baseUrl': "../lib",
    'paths': {
        'BBT': "../BBT"
    },
    'include': ["../tools/almond", "BBT"],
    'exclude': ["jquery", "underscore"],
    'out': "../dist/BBT.min.js",
    'wrap': {
        'startFile': "wrap.start",
        'endFile': "wrap.end"
    }
}
