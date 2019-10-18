angular.module('formComponent.template', []).run(['$templateCache', function($templateCache) {   'use strict';

  $templateCache.put('src/tpl/form-component.tpl.html',
    "<div class=md-form-component layout=row layout-align=\"start center\" ng-if=!config.hide><div ng-if=!config.hideLabel flex=40 layout=column layout-align=\"start stretch\"><label class=\"md-form-label label-{{config.type}}\" for={{config.code}} data-auto={{config.code}}-{{config.type}}-label>{{ config.name }} {{ config.required ? '*' : ''}}</label></div><div flex=\"{{config.hideLabel ? '100' : '60' }}\" layout=column layout-align=\"center stretch\"><md-input-container class=md-block flex layout=column layout-align=\"center stretch\" ng-if=\"config.type !== 'date' && config.type !== 'checkboxWithInput'\" md-no-float><input ng-if=\"config.type === 'text'\" ng-model=model[config.code] name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" aria-label=\"{{config.name || config.code}}\" id={{config.code}} placeholder={{config.placeholder}} md-no-asterisk ng-disabled=\"config.disabled || !editable\" ng-readonly=\"config.readonly || false\" ng-required=\"config.required || false\" ng-minlength=\"config.minLength || undefined\" ng-maxlength=\"config.maxLength || undefined\" ng-pattern=\"config.pattern || undefined\" ng-change=\"config.changeFn(model[config.code], model)\" ng-blur=\"config.blurFn(model[config.code], model)\" data-auto={{config.code}}-text><textarea ng-if=\"config.type === 'textarea'\" ng-model=model[config.code] name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" aria-label=\"{{config.name || config.code}}\" id={{config.code}} type=textarea placeholder={{config.placeholder}} md-no-asterisk ng-disabled=\"config.disabled || !editable\" ng-readonly=\"config.readonly || false\" ng-required=\"config.required || false\" ng-minlength=\"config.minLength || undefined\" ng-maxlength=\"config.maxLength || undefined\" ng-pattern=\"config.pattern || undefined\" rows=\"{{config.textareaConfig.rows || 1}}\" ng-change=\"config.changeFn(model[config.code], model)\" ng-blur=\"config.blurFn(model[config.code], model)\" data-auto={{config.code}}-textarea>\n" +
    "			</textarea><input ng-if=\"config.type === 'email'\" ng-model=model[config.code] name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" aria-label=\"{{config.name || config.code}}\" id={{config.code}} type=email placeholder={{config.placeholder}} md-no-asterisk ng-disabled=\"config.disabled || !editable\" ng-readonly=\"config.readonly || false\" ng-required=\"config.required || false\" ng-minlength=config.minLength ng-maxlength=config.maxLength ng-pattern=\"config.pattern || undefined\" ng-change=\"config.changeFn(model[config.code], model)\" ng-blur=\"config.blurFn(model[config.code], model)\" data-auto={{config.code}}-email> <input ng-if=\"config.type === 'number'\" ng-model=model[config.code] name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" aria-label=\"{{config.name || config.code}}\" id={{config.code}} type=number placeholder={{config.placeholder}} md-no-asterisk ng-disabled=\"config.disabled || !editable\" ng-readonly=\"config.readonly || false\" ng-required=\"config.required || false\" ng-min=config.min ng-max=config.max ng-step=\"config.step || undefined\" ng-minlength=config.minLength ng-maxlength=config.maxLength ng-pattern=\"config.pattern || undefined\" ng-change=\"config.changeFn(model[config.code], model)\" ng-blur=\"config.blurFn(model[config.code], model)\" data-auto={{config.code}}-number><md-radio-group ng-if=\"config.type === 'radio'\" ng-model=model[config.code] name={{config.code}} aria-label=\"{{config.name || config.code}}\" ng-class=\"{ 'md-warning': config.warning }\" ng-change=\"config.changeFn(model[config.code], model)\" ng-readonly=\"config.readonly || false\" ng-required=\"config.required || false\" ng-disabled=\"config.disabled || !editable\"><md-radio-button ng-if=\"config.radioConfig.optionType !== constants.OBJECT && config.radioConfig.valueKey && config.radioConfig.textKey\" ng-repeat=\"option in config.radioConfig.options\" value={{option[config.radioConfig.valueKey]}} aria-label={{option[config.radioConfig.textKey]}} class=md-primary data-auto={{config.code}}-{{option[config.radioConfig.valueKey]}}-radio>{{option[config.radioConfig.textKey]}}</md-radio-button><md-radio-button ng-if=\"config.radioConfig.optionType !== constants.OBJECT && (!config.radioConfig.valueKey || !config.radioConfig.textKey)\" ng-repeat=\"option in config.radioConfig.options\" value={{option}} aria-label={{option}} class=md-primary data-auto={{config.code}}-{{option}}-radio>{{option[config.radioConfig.textKey]}}</md-radio-button><md-radio-button ng-if=\"config.radioConfig.optionType === constants.OBJECT\" ng-repeat=\"(key, value) in config.radioConfig.options\" value={{key}} aria-label={{value}} class=md-primary data-auto={{config.code}}-{{key}}-radio>{{value}}</md-radio-button></md-radio-group><md-select ng-if=\"config.type === 'select' && !config.selectConfig.multiple\" name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" id={{config.code}} md-no-asterisk ng-model=model[config.code] aria-label=\"{{config.name || config.code}}\" ng-disabled=\"config.disabled || !editable\" ng-required=\"config.required || false\" ng-change=\"config.changeFn(model[config.code], model)\" ng-blur=\"config.blurFn(model[config.code], model)\" data-auto={{config.code}}-select><md-option ng-if=\"config.selectConfig.optionType !== constants.OBJECT && config.selectConfig.valueKey && config.selectConfig.textKey\" ng-repeat=\"option in config.selectConfig.options\" ng-value=option[config.selectConfig.valueKey] data-auto={{config.code}}-{{option[config.selectConfig.valueKey]}}-select>{{option[config.selectConfig.textKey]}}</md-option><md-option ng-if=\"config.selectConfig.optionType !== constants.OBJECT && (!config.selectConfig.valueKey || !config.selectConfig.textKey)\" ng-repeat=\"option in config.selectConfig.options\" ng-value=option data-auto={{config.code}}-{{option}}-select>{{option}}</md-option><md-option ng-if=\"config.selectConfig.optionType === constants.OBJECT\" ng-repeat=\"(key, value) in config.selectConfig.options\" ng-value=key data-auto={{config.code}}-{{key}}-select>{{value}}</md-option></md-select><md-select ng-if=\"config.type === 'select' && config.selectConfig.multiple\" name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" id={{config.code}} md-no-asterisk ng-model=model[config.code] multiple aria-label=\"{{config.name || config.code}}\" ng-disabled=\"config.disabled || !editable\" ng-required=\"config.required || false\" ng-change=\"config.changeFn(model[config.code], model)\" ng-blur=\"config.blurFn(model[config.code], model)\"><md-option ng-if=\"config.selectConfig.optionType !== constants.OBJECT && config.selectConfig.valueKey && config.selectConfig.textKey\" ng-repeat=\"option in config.selectConfig.options\" ng-value=option[config.selectConfig.valueKey] data-auto={{config.code}}-{{option[config.selectConfig.valueKey]}}-select>{{option[config.selectConfig.textKey]}}</md-option><md-option ng-if=\"config.selectConfig.optionType !== constants.OBJECT && (!config.selectConfig.valueKey || !config.selectConfig.textKey)\" ng-repeat=\"option in config.selectConfig.options\" ng-value=option data-auto={{config.code}}-{{option}}-select>{{option}}</md-option><md-option ng-if=\"config.selectConfig.optionType === constants.OBJECT\" ng-repeat=\"(key, value) in config.selectConfig.options\" ng-value=key data-auto={{config.code}}-{{key}}-select>{{value}}</md-option></md-select><md-checkbox class=md-primary ng-if=\"config.type === 'checkbox'\" ng-disabled=\"config.disabled || !editable\" name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" id={{config.code}} md-no-asterisk ng-model=model[config.code] aria-label=\"{{config.name || config.code}}\" ng-required=\"config.required || false\" ng-change=\"config.changeFn(model[config.code], model)\" data-auto={{config.code}}-checkbox></md-checkbox><md-autocomplete ng-if=\"config.type === 'autocomplete'\" ng-required=\"config.required || false\" ng-disabled=\"config.disabled || !editable\" md-input-name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" md-no-asterisk md-input-id={{config.code}} md-no-cache=config.autocompleteConfig.noCache md-selected-item=config.autocompleteConfig.selectedItem md-search-text-change=\"config.autocompleteConfig.searchTextChange(config.autocompleteConfig.searchText, model)\" md-search-text=config.autocompleteConfig.searchText md-selected-item-change=\"config.autocompleteConfig.selectedItemChange(item, model)\" md-items=\"item in config.autocompleteConfig.querySearch(config.autocompleteConfig.searchText, model)\" md-item-text=item[config.autocompleteConfig.displayKey] md-min-length=\"config.autocompleteConfig.minLength || 0\" placeholder={{config.placeholder}} md-menu-class={{config.code}}-menu-class-autocomplete md-menu-container-class={{config.code}}-menu-container-autocomplete data-auto={{config.code}}-autocomplete><md-item-template class={{config.code}}-template-autocomplete data-auto={{config.code}}-template-autocomplete><span ng-if=config.autocompleteConfig.displayKey md-highlight-text=config.autocompleteConfig.searchText md-highlight-flags=^i title=\"{{item[config.autocompleteConfig.resultTitleKey] || item[config.autocompleteConfig.displayKey]}}\" data-auto={{config.code}}-{{item[config.autocompleteConfig.valueKey]}}-autocomplete>{{ item[config.autocompleteConfig.resultLabelKey] || item[config.autocompleteConfig.displayKey] }}</span> <span ng-if=!config.autocompleteConfig.displayKey md-highlight-text=config.autocompleteConfig.searchText md-highlight-flags=^i title={{item}} data-auto={{config.code}}-{{item}}-autocomplete>{{ item }}</span></md-item-template><md-not-found><span ng-if=\"config.autocompleteConfig.searchText.length === 0\">No options available</span> <span ng-if=\"config.autocompleteConfig.searchText.length > 0\">Nothing results matching \"{{config.autocompleteConfig.searchText}}\" were found.</span></md-not-found></md-autocomplete></md-input-container><md-datepicker flex layout=row layout-align=stretch-center ng-if=\"config.type === 'date'\" name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" md-no-asterisk id={{config.code}} ng-model=model[config.code] md-placeholder=\"{{config.placeholder || 'Enter date'}}\" md-min-date=\"(config.dateConfig && config.dateConfig.minDate) ? config.dateConfig.minDate : false\" md-max-date=\"(config.dateConfig && config.dateConfig.maxDate) ? config.dateConfig.maxDate : false\" ng-required=\"config.required || false\" ng-disabled=\"config.disabled || !editable\" ng-change=\"config.changeFn(model[config.code], model)\" data-auto={{config.code}}-datepicker md-open-on-focus></md-datepicker><div class=checkbox-input layout=row flex layout-align=\"center stretch\" ng-if=\"config.type === 'checkboxWithInput'\"><md-checkbox class=md-primary ng-disabled=\"config.disabled || !editable\" name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" id={{config.code}} md-no-asterisk ng-model=model[config.code] aria-label=\"{{config.name || config.code}}\" ng-required=\"config.required || false\" ng-change=\"config.changeFn(model[config.code], model)\" data-auto={{config.code}}-checkbox></md-checkbox><md-input-container class=md-block flex layout=column layout-align=\"center stretch\" md-no-float><input ng-model=model[config.inputBox.code] name={{config.inputBox.code}} ng-class=\"{ 'md-warning': config.inputBox.warning }\" aria-label=\"{{config.inputBox.name || config.inputBox.code}}\" id={{config.inputBox.code}} type={{config.inputBox.type}} placeholder={{config.inputBox.placeholder}} md-no-asterisk ng-disabled=!model[config.code] ng-readonly=\"config.inputBox.readonly || false\" ng-required=\"config.inputBox.required || false\" ng-minlength=\"config.inputBox.minLength || undefined\" ng-maxlength=\"config.inputBox.maxLength || undefined\" ng-pattern=\"config.inputBox.pattern || undefined\" ng-change=\"config.inputBox.changeFn(model[config.inputBox.code], model)\" ng-blur=\"config.inputBox.blurFn(model[config.inputBox.code], model)\" data-auto={{config.inputBox.code}}-checkbox-input></md-input-container></div><div class=checkbox-dropdown layout=row flex layout-align=\"center stretch\" ng-if=\"config.type === 'checkboxWithDropdown'\"><md-checkbox class=md-primary ng-disabled=\"config.disabled || !editable\" name={{config.code}} ng-class=\"{ 'md-warning': config.warning }\" id={{config.code}} md-no-asterisk ng-model=model[config.code] aria-label=\"{{config.name || config.code}}\" ng-required=\"config.required || false\" ng-change=\"config.changeFn(model[config.code], model)\" data-auto={{config.code}}-checkbox></md-checkbox><md-input-container class=md-block flex layout=column layout-align=\"center stretch\" md-no-float><md-select name={{config.dropdownBox.code}} ng-class=\"{ 'md-warning': config.warning }\" id={{config.dropdownBox.code}} md-no-asterisk ng-model=model[config.dropdownBox.code] aria-label=\"{{config.dropdownBox.name || config.dropdownBox.code}}\" ng-disabled=!model[config.code] ng-required=\"config.dropdownBox.required || false\" ng-change=\"config.dropdownBox.changeFn(model[config.code], model)\" ng-blur=\"config.dropdownBox.blurFn(model[config.code], model)\"><md-option ng-if=\"config.dropdownBox.selectConfig.optionType !== constants.OBJECT && config.dropdownBox.selectConfig.valueKey && config.dropdownBox.selectConfig.textKey\" ng-repeat=\"option in config.dropdownBox.selectConfig.options\" ng-value=option[config.dropdownBox.selectConfig.valueKey] data-auto={{config.code}}-{{option[config.selectConfig.valueKey]}}-checkbox-input>{{option[config.dropdownBox.selectConfig.textKey]}}</md-option><md-option ng-if=\"config.dropdownBox.selectConfig.optionType !== constants.OBJECT && (!config.dropdownBox.selectConfig.valueKey || !config.dropdownBox.selectConfig.textKey)\" ng-repeat=\"option in config.dropdownBox.selectConfig.options\" ng-value=option data-auto={{config.dropdownBox.code}}-{{option}}-checkbox-input>{{option}}</md-option><md-option ng-if=\"config.dropdownBox.selectConfig.optionType === constants.OBJECT\" ng-repeat=\"(key, value) in config.dropdownBox.selectConfig.options\" ng-value=key data-auto={{config.dropdownBox.code}}-{{key}}-checkbox-input>{{value}}</md-option></md-select></md-input-container></div></div></div>"
  );
}]);