odoo.define('academy.add_value', function (require) {
'use strict';

    var publicWidget = require('web.public.widget');
    var core = require('web.core');
    var _t = core._t;
    var timeout;

    publicWidget.registry.addValue = publicWidget.Widget.extend({
    selector: '.employeeAdd',
    events: {
        'click .create_emp': '_onAddValue',
    },
//    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
     _onAddValue: function (ev) {
        var name = $("input[name='name']").val();
        var email = $("input[name='work_email']").val();
        var phone = $("input[name='work_phone']").val();
//        var department = $("input[name='department.id']").val();
        var department = $(".department option:selected").data('department-id');
        this._rpc({
            route: "/add/value/sum",
            params: {
                num1: name,
                num2: email,
                num3: phone,
                num4: department,
            },
        })
        console.log('Inside 111 My widgetttttttt>>>>>>>>>', department)
     },
});
return {
    AcademyAddValue: publicWidget.registry.addValue,
};

});