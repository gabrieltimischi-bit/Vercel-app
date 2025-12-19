import BookingForm from "@/components/booking-form"

export default function BookingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Programează o Consultație</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fă primul pas către transformarea ta și programează o consultație inițială pentru a discuta despre
              obiectivele tale.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}

