var sys = require('sys');
var ghApi = require('github');

sys.puts('Requesting issues...')

var ghMain = new ghApi({
	version: "3.0.0"
});

var repo = ghMain.issues.repoIssues({user: 'rails', repo: 'rails', per_page: 100}, function(err, data){
	var issues = data;

	for(issue in issues) {
		sys.puts(issues[issue].title);
	}
});