# pocket-lawyer-widget
Pocket Lawyer Widget

Use this source:

<script>
    document.addEventListener("DOMContentLoaded", function() {
        var script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/timofeevvv12/pocket-lawyer-widget@latest/widget.js";
        script.onload = function() {
            pocket_lawyer_widget("USER-ID");
        };
        document.body.appendChild(script);
    });
</script>
