var app = angular.module("paginacao-ex.app",[]);

var controller = function() {
    
    var vm = this;

    vm.currentPage = 1;
    vm.pageSize = 5;
    vm.totalPages = 0;

    vm.dados = [
        {"id": 1,"nome": "Hall Payne","email": "mattis.ornare@montesnascetur.ca","telefone": "(00)9859-5419","empresa": "Eu Institute"},
        {"id": 2,"nome": "Jelani Houston","email": "et@malesuada.com","telefone": "(39)8638-1863","empresa": "Consequat Foundation"},
        {"id": 3,"nome": "Armand Ramos","email": "vulputate@euismodmauris.org","telefone": "(01)9458-5175","empresa": "Vitae Company"},
        {"id": 4,"nome": "Moses Hopkins","email": "Morbi.neque.tellus@vehicula.co.uk","telefone": "(29)9464-0186","empresa": "Ut Dolor Dapibus Inc."},
        {"id": 5,"nome": "Hayden Knight","email": "Cum.sociis@In.net","telefone": "(35)7445-0562","empresa": "Arcu Et Pede Inc."},
        {"id": 6,"nome": "Wylie Jennings","email": "Aenean.massa@Sedid.edu","telefone": "(69)6582-5877","empresa": "A Corp."},
        {"id": 7,"nome": "Judah Porter","email": "urna.suscipit@sitamet.org","telefone": "(07)0398-8481","empresa": "Mi Institute"},
        {"id": 8,"nome": "Lionel Donovan","email": "velit.Quisque@metusInlorem.edu","telefone": "(79)8559-7601","empresa": "Et Lacinia Vitae LLC"},
        {"id": 9,"nome": "Xanthus Winters","email": "libero.et.tristique@velnisl.edu","telefone": "(66)5475-6986","empresa": "Ut Cursus Luctus Foundation"},
        {"id": 10,"nome": "Garrett Benton","email": "tristique.senectus@Crasvehiculaaliquet.com","telefone": "(79)8566-3160","empresa": "Libero LLP"},
        {"id": 11,"nome": "Hall Payne","email": "mattis.ornare@montesnascetur.ca","telefone": "(00)9859-5419","empresa": "Eu Institute"},
        {"id": 12,"nome": "Jelani Houston","email": "et@malesuada.com","telefone": "(39)8638-1863","empresa": "Consequat Foundation"},
        {"id": 13,"nome": "Armand Ramos","email": "vulputate@euismodmauris.org","telefone": "(01)9458-5175","empresa": "Vitae Company"},
        {"id": 14,"nome": "Moses Hopkins","email": "Morbi.neque.tellus@vehicula.co.uk","telefone": "(29)9464-0186","empresa": "Ut Dolor Dapibus Inc."},
        {"id": 15,"nome": "Hayden Knight","email": "Cum.sociis@In.net","telefone": "(35)7445-0562","empresa": "Arcu Et Pede Inc."},
        {"id": 16,"nome": "Wylie Jennings","email": "Aenean.massa@Sedid.edu","telefone": "(69)6582-5877","empresa": "A Corp."},
        {"id": 17,"nome": "Judah Porter","email": "urna.suscipit@sitamet.org","telefone": "(07)0398-8481","empresa": "Mi Institute"},
        {"id": 18,"nome": "Lionel Donovan","email": "velit.Quisque@metusInlorem.edu","telefone": "(79)8559-7601","empresa": "Et Lacinia Vitae LLC"},
        {"id": 19,"nome": "Xanthus Winters","email": "libero.et.tristique@velnisl.edu","telefone": "(66)5475-6986","empresa": "Ut Cursus Luctus Foundation"},
        {"id": 20,"nome": "Garrett Benton","email": "tristique.senectus@Crasvehiculaaliquet.com","telefone": "(79)8566-3160","empresa": "Libero LLP"}
    ];
  
    vm.totalPages = Math.trunc(vm.dados.length / vm.pageSize) + (vm.dados.length % vm.pageSize == 0 ? 0 : 1);

    vm.paginacao = function (element, $index, array) {
        return $index >= (vm.currentPage - 1) * vm.pageSize && $index < vm.currentPage * vm.pageSize;
    };
    
    vm.navigateFirstPage = function () {
      vm.currentPage = 1;
    };
    
    vm.navigatePreviousPage = function () {
      vm.currentPage--;
    };
      
    vm.navigateNextPage = function () {
      vm.currentPage++;
    };
    
    vm.navigateLastPage = function () {
      vm.currentPage = vm.totalPages;
    };

};

// controller.$inject = [];

app.controller("paginacao-ex.controller", controller);