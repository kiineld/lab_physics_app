import {Card, CardContent, CardHeader} from "@/components/ui";


export default function Home() {
    const facilities = [
        {
          id: "1",
          title: "Преимущество 1",
          description: "описание"
        },
        {
          id: "2",
          title: "Преимущество 2",
          description: "описание"
        },
        {
          id: "3",
          title: "Преимущество 3",
          description: "описание"
        },
        {
          id: "4",
          title: "Преимущество 4",
          description: "описание"
        }
    ]

    return (

        <div className="flex flex-col justify-center items-center min-h-screen">
          {/*<h1>Информация о нас и нашем проекте</h1>*/}

          {/*  ABOUT-US  */}

          <section id="about" className="w-full flex flex-col justify-center min-h-screen mt-20 mb-20">
            <h1 className="text-center font-semibold text-2xl mb-5">О нас</h1>

            <div className="w-full flex justify-center items-center">
              <Card className="border-4 border-primary py-4 px-5 xl:py-8 xl:px-10">
                <CardHeader>
                  <h1 className="text-xl xl:text-4xl font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius enim non neque
                    ornare,
                    id
                    dapibus metus elementum. Sed consectetur orci vel nisi tristique, vel semper est semper.
                    Sed
                    pulvinar orci vel justo ultricies, at euismod felis faucibus. Sed et velit vel felis
                    pharetra
                    dignissim. Nulla facilisi.
                  </h1>
                </CardHeader>
                <CardContent>
                  <p className="text-lg xl:text-2xl font-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius enim non neque
                    ornare,
                    id
                    dapibus metus elementum. Sed consectetur orci vel nisi tristique, vel semper est semper.
                    Sed
                    pulvinar orci vel justo ultricies, at euismod felis faucibus. Sed et velit vel felis
                    pharetra
                    dignissim. Nulla facilisi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/*  ABOUT-PROJECT  */}

          <section id="aboutproject" className="w-full min-h-screen">
            <h1 className="text-center font-semibold text-2xl mb-5">О нашем проекте</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 w-full">
              {facilities.map((item) =>
                  <Card key={item.id} className="border-4 border-primary py-4 px-5 xl:py-8 xl:px-10">
                    <CardHeader>
                      <h1 className="text-3xl xl:text-4xl font-semibold">
                        {item.title}
                      </h1>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-normal">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>)
              }
            </div>
          </section>

          {/*  CONTACTS  */}

          <section id="contacts">
            <div className="">

            </div>
          </section>

          {/*  DOWNLOAD  */}

          <section id="download">
            <div className="">

            </div>
          </section>

        </div>
    )
}
