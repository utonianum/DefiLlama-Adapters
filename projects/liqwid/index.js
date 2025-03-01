const { sumTokensExport } = require('../helper/chain/cardano');

const scriptAddresses = [
  // Ada Market
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsg63z228hznt0rz2enxfzhtk2270gels0ht9uvf9wmyxs99qgwkkf2",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsglnschmu7dwefmhkd078735ucq2yh90ylkzxrenz9cy8uds3gzd0f",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsgcfpkhcpsthxpprf49lvfy2jhga5mygpfcj4qaypfzkmhnsw9rpx7",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsgl0sfgalgyvgedlnhfl7u2059dkyhp453hm86797rm5qhasyaak0d",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsga3q9zvxe5ehfytyye9m3dq3knvuz2fdnax7lhhjm4vvjgqlgr6ws",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsgmys5sq3xea3866499dczkshygljanhepcqjfwyhe3fpadsa5wd69",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsg6ypq27sagqxt4jwt57mdsef3zu65ng4zmzxaa246s97nxswjed26",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsgesaw6lwmnlk6z0aehzea9nwfvdvang9v42yylt83ym8zqqrjh90k",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsgelzwuv27k9keyjpag32pmx9mf63tn77feppvm7d0s5ndnsct59as",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsgmupshega3f5ym0freunp0p46rchpthvsyty398fh0msyws7wkxyx",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsg70l2wkhq0pr72jsdrv2kn8v3pqnrt0qykpq9fwr2wn0czswer98l",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsg6a0x7l0scsd0wvfm3ljugdpsu4kctwfjyud65xfeht5uyqr02la5",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsg78jkqyfeeuz5m6sfv27g9vav8w83lsaqewjqxnpnpjd9wsmng4ka",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsglwdw2g8sat0hr2pdt2ct27n33z0w6dzsfy684ut24gjfsqjxugry",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsg6s80extwffmz4yagvdxvr6cpd8nm3qne020739j706h3jqsd0vf2",
  "addr1xxqqegnx4ref4q6derz2n0zs0jeanaxdq7ynfhwv3luhsglccartl0f44hvc4vq8n3042epqvqq8cd4g9znpl5kdeyps7frwge",
  "addr1wypcayfxkqgnh8zfdsj9kft2hlpfvgtpmrkjlcge2e9rjvcelddkc", // batch
  "addr1w9afj34vc68qdm7heuz7esmr8sj76wpa45t7dh3ag8xpplgml3zuk", // batchFinal
  // DJED Market
  "addr1w8dprfgfdxnlwu3948579jrwg0ferf5a63ln8xj0mqcdzegayxmqq",
  "addr1w9wjz8tjt87gldh2usu8t5mfe4nkmlngp30a387h8s94fyg5uup5n",
  "addr1w8f7k5z4casxhcvz3vf5hlnt7fhgt5209t5hm36pdpduv6qdwf8ny",
  // SHEN Market
  "addr1wyw3ap36lnepstpjadwg8cg73llvmju4y94kmfld23lkzjggq4hyj",
  "addr1wxrxa3ucywn3lqpkzlyucak0a7aavkudh49fqt06yc05sws4l4zs2",
  "addr1wy6e9jukn8fpx7kesrpmapsnmz0cgq6lnskuff0xc0junggv6gd8l",
];

module.exports = {
  cardano: {
    tvl: sumTokensExport({ scripts: scriptAddresses, }),
    staking: sumTokensExport({ scripts: ["addr1w8arvq7j9qlrmt0wpdvpp7h4jr4fmfk8l653p9t907v2nsss7w7r4"], }),
    methodology: 'Adds up the Ada in the 16 action tokens and batch final token.'
  }
};
