const Enroll = () => {
    return (
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="gmail" class="form-control" placeholder="Email" />
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">ID CARD</label>
                            <input type="number" class="form-control" placeholder="ID CARD" />
                        </div>
                        <div class="text-center">
                            <button style={{ width: "200px" }} type="submit" class="btn btn-primary mt-3">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm">
                    <form class="form-inline d-flex">
                        <input style={{ width: '100%' }} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0 " style={{ marginLeft: "5px" }} type="submit">Search</button>
                    </form>
                    <div class="mt-3">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-center">Name</th>
                                    <th scope="col" class="text-center">Email</th>
                                    <th scope="col" class="text-center">ID CARD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="text-center" >1</th>
                                    <td class="text-center">Mark</td>
                                    <td class="text-center">Otto</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">2</th>
                                    <td class="text-center">Jacob</td>
                                    <td class="text-center">Thornton</td>
                                </tr>
                                <tr>
                                    <th scope="row" class="text-center">3</th>
                                    <td class="text-center">Larry</td>
                                    <td class="text-center">the Bird</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Enroll