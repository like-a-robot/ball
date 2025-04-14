class AcGameMenu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
            single
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
            multi
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
            setting
        </div>
    </div>
</div>
            `);
        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');

        this.start();
    }

    start(){
        this.add_listening_events();
    }
    add_listening_events(){
        let outer = this;
        this.$single_mode.click(function(){
            console.log("click single");
            outer.hide();
            outer.root.playground.show();

        });
        this.$multi_mode.click(function(){

            console.log("click multi");
        });
        this.$settings.click(function(){
            console.log("click settings");

        });
    }

    show(){
        this.$menu.show();
    }
    hide(){
        this.$menu.hide();
    }

}
