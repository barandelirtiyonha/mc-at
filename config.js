const config = {
  "token": "",

  "dashboard" : {
    "oauthSecret": "", // botunuzun client secret tini buraya yazin
    "callbackURL": "https://kc-at-panel.glitch.me/callback",// burda login yapmak icin botunuzun Outh2 yazan yere gelip orda daki kizma yapistirip kaydedin
    "sessionSecret": "",
    "domain": "https://kc-at-panel.glitch.me",// buraya kc at alt yapi yerine yazdiysaniz kc-at-panel isimi ile degistirin
    "port": 8000
  },
};

module.exports = config;