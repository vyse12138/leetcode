class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def log(self):
        print(self.name + ' ' + self.age.__str__() +
              ' ' + self.超能力 + ' ' + self.property)


class Super(Person):
    def b(self, 超能力):
        self.超能力 = 超能力


class Forest(Super):
    def c(self, property):
        self.property = property


shuxing1 = Forest('wenli', 999)
shuxing1.b('NBBBB')
shuxing1.c('fire')
shuxing1.log()
