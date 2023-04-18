(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (window.location.pathname != '/defense') {
                alert('You must be in a Tower Defense game!');
            } else {
                reactHandler().stateNode.towers.forEach(tower => {
                    tower.damage = 1e308;
                    tower.range = 1e308;
                    tower.level = 3;
                    tower.blastRadius = 1e308
                    tower.fullCd = 0;
                });

                alert('Maxed out towers!');
            };
})();
