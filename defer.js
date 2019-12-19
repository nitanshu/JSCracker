<script defer src="js/vendor/jquery.js"></script>
<script defer src="js/script2.js"></script>
<script defer src="js/script3.js"></script>

// All the scripts with the defer attribute will load in the order they appear on the page.
// So in the second example, we can be sure that jquery.js will load before script2.js and script3.js and 
// that script2.js will load before script3
