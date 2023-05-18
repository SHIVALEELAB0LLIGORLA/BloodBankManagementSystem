using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using CRUD_Op.Models;

namespace CRUD_Op.Controllers
{
    public class PersonController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            string query = @"select Person_ID, Name, Address, Phone, IsActive, Password from Person";
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }
            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Post(Person pat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"insert into Person(Name, Address, Phone, IsActive, Password) values('" + pat.Name + @"','" + pat.Address + @"', '" + pat.Phone + @"', '" + pat.IsActive + @"', '" + pat.Password + @"' )";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Added Successfully";
            }
            catch (Exception)
            {
                return "Failed to Add";
            }
        }
        public string Put(Person pat)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @"update Person set Name = '" + pat.Name + @"', Address= '" + pat.Address + @"', Phone= '" + pat.Phone + @"', IsActive= '" + pat.IsActive + @"', Password= '" + pat.Password + @"' where Person_ID =" + pat.Person_ID + @"";
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Updated Successfully";
            }
            catch (Exception)
            {
                return "Failed to Update";
            }



        }
        public string Delete(int id)
        {
            try
            {
                DataTable table = new DataTable();
                string query = @" delete from Person where Person_ID =" + id;
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["BBMS"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Deleted Successfully";
            }
            catch (Exception)
            {
                return "Failed to Delete";
            }



        }
    }
}
