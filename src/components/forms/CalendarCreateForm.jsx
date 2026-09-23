import { useState } from 'react'
import Input from '../ui/Input.jsx'
import Button from '../ui/Button.jsx'

const INITIAL_STATE = { date: '', time: '', title: '', description: '' }

/**
 * PRD Open Question #2 resolved: a single /calendar/create route with
 * internal step state (not two routes), so step-1 data survives moving
 * to step-2 without URL complexity.
 */
export default function CalendarCreateForm({ onComplete }) {
    const [step, setStep] = useState(1)
    const [values, setValues] = useState(INITIAL_STATE)

    function handleChange(field) {
        return (event) => setValues((prev) => ({ ...prev, [field]: event.target.value }))
    }

    function handleNext(event) {
        event.preventDefault()
        setStep(2)
    }

    function handleBack() {
        setStep(1)
    }

    function handleSubmit(event) {
        event.preventDefault()
        onComplete?.(values)
    }

    if (step === 1) {
        return (
            <form onSubmit={handleNext} className="flex flex-col gap-5">
                <p className="text-small text-text-placeholder">Step 1 of 2 — Date & time</p>
                <Input label="Date" type="date" required value={values.date} onChange={handleChange('date')} />
                <Input label="Time" type="time" required value={values.time} onChange={handleChange('time')} />
                <Button as="button" type="submit" className="w-full">
                    Continue
                </Button>
            </form>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <p className="text-small text-text-placeholder">Step 2 of 2 — Details</p>
            <Input label="Event Title" required value={values.title} onChange={handleChange('title')} />
            <Input
                label="Description"
                required
                value={values.description}
                onChange={handleChange('description')}
            />
            <div className="flex gap-3">
                <Button as="button" type="button" variant="outline" onClick={handleBack} className="flex-1">
                    Back
                </Button>
                <Button as="button" type="submit" className="flex-1">
                    Create Event
                </Button>
            </div>
        </form>
    )
}