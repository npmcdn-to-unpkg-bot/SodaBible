<head>
<title>SodaBible</title>
</head>
<body>
<script src="build/react.js"></script>
<script src="build/react-dom.js"></script>
<script src="https://npmcdn.com/babel-core@5.8.38/browser.min.js"></script>
<script type="text/babel">

//In the end the file needs to be .jsx
// (Put back on Line 5) <div id="content"></div>
var TEXT1 = {
  'words' = 'Welcome to SodaBible! This is a Bible application that I am currently making and when I am done with it I will publish it under Soderminal. This is still a early project and there still needs to be a TON of work done, but I will continue updating the project as time goes on!'
}

var Welcome = React.createClass({
  render = function() {
    return (
      <div>
      {this.props.welcomeText.words}
      </div>
    );
  }
});

ReactDOM.render(<Welcome welcomeText={TEXT1} />, document.getElementById('content'));
</script>
</body>
