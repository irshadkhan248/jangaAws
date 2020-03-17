import Vue from "vue";
import axios from "axios";

Vue.prototype.$axios = axios;
export default {
  // company create api
  createCompany: (data, callback) => {
    console.log("comapnydata", typeof data, data);
    axios({
      method: "post",
      url: "http://localhost:3000/Company/createCompany",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("inkghkjhkjhkjh", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  // users dropdown in company
  getAllUsers: (data, callback) => {
    console.log("userdata", typeof data, data);
    axios({
      method: "get",
      url: "http://localhost:3000/User/getAll",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("inkghkjhkjhkjh", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  // get all list company
  getAllList: (data, callback) => {
    console.log("CompanyList", typeof data, data);
    axios({
      method: "get",
      url: "http://localhost:3000/Company/getAll",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("inkghkjhkjhkjh", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  // search for pagination and search name
  search: (data, callback) => {
    console.log("CompanyList", typeof data, data);
    axios({
      method: "post",
      url: "http://localhost:3000/Company/getAllPagination",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("inkghkjhkjhkjh", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  // this is use for deleted company
  delete: (data, callback) => {
    axios({
      method: "delete",
      url: `http://localhost:3000/Company/deleteCompany/${data.id}`
    })
      .then(res => {
        console.log("res", res);
        callback(res.data);
      })
      .catch(err => {
        console.log("err", err);
        callback(err);
      });
  },
  // this is use for edit company
  editCompany: (data, callback) => {
    console.log("data.id=====", data);
    // console.log("data.id=====", data)
    axios({
      method: "put",
      url: `http://localhost:3000/Company/updateCompany/${data._id}`,
      data: data
    })
      .then(res => {
        console.log("res====", res);
        callback(res.data);
      })
      .catch(err => {
        console.log("err", err);
        callback(err);
      });
  },
  // this is use for find comapany
  findCompany: (id, callback) => {
    console.log("axiosid", id);

    axios({
      method: "get",
      url: `http://localhost:3000/Company/getOne/${id}`
    })
      .then(res => {
        console.log("res", res);
        callback(res.data);
      })
      .catch(err => {
        console.log("err", err);
        callback(err);
      });
  },
  editProject: (data, callback) => {
    axios({
      method: "post",
      url: `http://localhost:3000/Project/editProject/${data._id}`,
      data: data
    })
      .then(res => {
        callback(res);
      })
      .catch(err => {
        callback(err);
      });
  },
  // this is use for create project
  createProject: (data, callback) => {
    console.log("create project data", data);
    axios({
      method: "post",
      url: "http://localhost:3000/project/createProject",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("createproject", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  // get all list company
  getProjectList: (data, callback) => {
    console.log("CompanyList", typeof data, data);
    axios({
      method: "get",
      url: "http://localhost:3000/project/getAll",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("projectlist", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  deleteProject: (data, callback) => {
    axios({
      method: "delete",
      url: `http://localhost:3000/project/deleteProject/${data.id}`
    })
      .then(response => {
        console.log("responsezvxv", response);
        console.log("deleted");

        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  getOneProject: (id, callback) => {
    axios({
      method: "get",
      url: `http://localhost:3000/project/getOne/${id}`
    })
      .then(response => {
        console.log("responsezvxv", response);
        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  searchProject: (data, callback) => {
    console.log("project", typeof data, data);
    axios({
      method: "post",
      url: "http://localhost:3000/project/getAllPagination",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("search project axios", response);
        callback(response.data);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  searchEnvironment: (data, callback) => {
    axios({
      method: "post",
      url: "http://localhost:3000/environment/getAllPagination",
      data: data
      // header: {}
    })
      .then(response => {
        console.log("sarrch project", response.data.result);
        callback(response.data.result);
      })
      .catch(e => {
        console.log("ee", e);
        callback(e);
      });
  },
  getAllEnvs: (data, callback) => {
    axios({
      method: "get",
      url: "http://localhost:3000/environment/getAll",
      data: data
      // header: {}
    })
      .then(response => {
        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  getByCompany: (id, callback) => {
    console.log("data in get by company", id);
    axios({
      method: "get",
      url: `http://localhost:3000/project/getByCompany/${id}`
      // header: {}
    })
      .then(response => {
        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  deleteEnv: (id, callback) => {
    console.log("id", id);

    axios({
      method: "delete",
      url: `http://localhost:3000/environment/deleteEnvironment/${id.id}`
      // header: {}
    })
      .then(response => {
        console.log("responsezvxv", response);
        console.log("deleted");

        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  createEnv: (data, callback) => {
    axios({
      method: "post",
      url: `http://localhost:3000/environment/createEnvironment`,
      data: data
    })
      .then(response => {
        console.log("responsezvxv", response);
        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  getEnv: (id, callback) => {
    axios({
      method: "get",
      url: `http://localhost:3000/environment/getOne/${id}`
    })
      .then(response => {
        console.log("responsezvxv", response);
        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  },
  updateEnvironment: (data, callback) => {
    console.log("update Environemnt", data);

    axios({
      method: "put",
      url: `http://localhost:3000/environment/updateEnvironment/${data._id}`,
      data: data
    })
      .then(response => {
        console.log("responsezvxv", response);
        callback(response.data);
      })
      .catch(e => {
        callback(e);
      });
  }
};
