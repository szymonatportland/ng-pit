class DetailsController {
    constructor(detailsService) {
        this.detailsService = detailsService;
        this.updateRelated(this.selected);
    }

    updateRelated(selected) {
        this.detailsService
            .getDirectlyRelated(selected)
            .then((related) => {
                this.related = related;
            })
    }
}

DetailsController.$inject = ['detailsService'];

export default DetailsController;
