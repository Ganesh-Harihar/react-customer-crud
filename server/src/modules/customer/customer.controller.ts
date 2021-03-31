import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
  Req,
  Res,
  UseBefore,
  UploadedFile,
} from "routing-controllers";
import { Inject } from "typedi";
import { CustomerService } from "./customer.service";
import { OpenAPI } from "routing-controllers-openapi";
import { Response, Request } from "express";
import * as multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./temp/");
  },
  filename: function (req, file, cb) {
    var extension = file.mimetype;
    extension = extension.substring(
      extension.indexOf("/") + 1,
      extension.length
    );
    var filename = file.originalname + "-" + Date.now() + "." + extension;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

@Controller()
@JsonController("/customers")
export class CustomerController {
  constructor() {}

  @Inject()
  customerService: CustomerService = new CustomerService();

  @Get("/")
  @UseBefore()
  @OpenAPI({ summary: "Get list of all the customers", operationId: "getAll" })
  async getAll(@Req() request: Request, @Res() response: Response) {
    try {
      const customers = await this.customerService.list();
      return response.status(200).json({
        status: "Success",
        data: customers,
      });
    } catch (error) {
      return response.status(422).json({
        status: "Error",
        message: error.message || "Error while getting customer list",
      });
    }
  }

  @Get("/:id")
  @OpenAPI({
    summary: "Get customer by customer id",
    operationId: "getCustomerById",
  })
  async getCustomerById(
    @Param("id") id: string,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      const customer = await this.customerService.findById(id);
      if (customer) {
        return response.status(200).json({
          status: "Success",
          data: customer,
        });
      } else {
        return response.status(200).json({
          status: "No customer found",
        });
      }
    } catch (error) {
      return response.status(422).json({
        status: "Error",
        message: error.message || "Error while getting customer",
      });
    }
  }

  @Post("/")
  @OpenAPI({ summary: "sign up", operationId: "signUp" })
  async signUp(
    @UploadedFile("profilePicture", { options: upload }) profilePicture: any,
    @Body() user: any,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      user.profilePicture = profilePicture.path;
      const createdCustomer = await this.customerService.create(user);
      return response.status(200).json({
        status: "Success",
        data: createdCustomer,
      });
    } catch (error) {
      return response.status(422).json({
        status: "Error",
        message: error.message || "Error while creating customer",
      });
    }
  }

  @Put("/:id")
  @OpenAPI({ summary: "Update customer by customer id", operationId: "update" })
  async update(
    @Param("id") id: string,
    @Body() user: any,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      const updatedCustomer = await this.customerService.update(id, user);
      return response.status(200).json({
        status: "Success",
        data: updatedCustomer,
      });
    } catch (error) {
      return response.status(422).json({
        status: "Error",
        message: error.message || "Error while updating customer",
      });
    }
  }

  @Delete("/:id")
  @OpenAPI({ summary: "Remove customer by customer id", operationId: "remove" })
  async remove(
    @Param("id") id: string,
    @Req() request: Request,
    @Res() response: Response
  ) {
    try {
      await this.customerService.delete(id);
      return response.status(200).json({
        status: "Success",
      });
    } catch (error) {
      return response.status(422).json({
        status: "Error",
        message: error.message || "Error while deleting customer",
      });
    }
  }
}
