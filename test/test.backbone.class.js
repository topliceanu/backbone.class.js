describe('Backbone.Class', function () {

    before( function () {
        this.Person = Backbone.Class.extend({});
        this.PoliceMan = this.Person.extend({});
        this.Officer = this.PoliceMan.extend({});
        this.MilkMan = this.Person.extend({});
    });

    it('should create a Person class', function () {
        expect(this.Person).to.be.an(Function);
        expect(this.Officer).to.be.an(Function);
    });

    it('should produce valid inheritance chains', function () {
        var officer = new this.Officer();

        expect(officer).to.be.an(Object);
        expect(officer).to.be.an(this.Person);
        expect(officer).to.be.an(this.PoliceMan);
        expect(officer).to.be.an(this.Officer);
        expect(officer).to.not.be.an(this.MilkMan);
    });

    describe('Person instances', function () {
        it('should create a Person instance', function () {
            var person = new this.Person();
            expect(person).to.be.an(Object);
            expect(person).to.be.an(this.Person);
        });    

        it('should create valid property chain', function () {
            var Person = Backbone.Class.extend({
                x: 1,
                initialize: function (params) {
                    if (params.y) {
                        this.y = params.y;
                    }
                }
            });
            var Officer = Person.extend({
                x: 2,
                initialize: function (params) {
                    Person.prototype.initialize.call(this, params);
                }
            });
            var person = new Person({y: 2});
            var officer = new Officer({y: 2});

            expect(person.x).to.be(1);
            expect(person.y).to.be(2);
            expect(officer.x).to.be(2);
            expect(officer.y).to.be(2);
        });
    });

});
