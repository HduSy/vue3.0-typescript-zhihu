interface Radio {
    switchRadio(trigger: boolean): void
}

interface Battery {
    checkBettery(): void
}

interface RadioWithBattery extends Radio, Battery {

}

class Car implements Radio {
    switchRadio(trigger: boolean): void {

    }
}

//implements Radio, Battery
class CellPhone implements RadioWithBattery {
    checkBettery(): void {

    }

    switchRadio(trigger: boolean): void {

    }
}